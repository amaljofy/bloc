import * as changeCase from "change-case";

export function getBlocEventTemplate(
  blocName: string,
  useEquatable: boolean
): string {
  return useEquatable
    ? getEquatableBlocEventTemplate(blocName)
    : getDefaultBlocEventTemplate(blocName);
}

function getEquatableBlocEventTemplate(blocName: string): string {
  const pascalCaseBlocName = changeCase.pascalCase(blocName.toLowerCase());
  return `import 'package:equatable/equatable.dart';

abstract class ${pascalCaseBlocName}Event extends Equatable {
  const ${pascalCaseBlocName}Event();
}
`;
}

function getDefaultBlocEventTemplate(blocName: string): string {
  const pascalCaseBlocName = changeCase.pascalCase(blocName.toLowerCase());
  return `import 'package:meta/meta.dart';

@immutable
abstract class ${pascalCaseBlocName}Event {}
`;
}
