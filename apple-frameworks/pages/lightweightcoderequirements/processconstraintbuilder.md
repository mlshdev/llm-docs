> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processconstraintbuilder](https://developer.apple.com/documentation/lightweightcoderequirements/processconstraintbuilder)

# ProcessConstraintBuilder

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A custom parameter attribute that constructs process constraints from closures.

## Declaration

```swift
@resultBuilder struct ProcessConstraintBuilder
```

## Topics

### Type Methods

- [buildBlock(\_:)](processconstraintbuilder/buildblock%28__%29.md): Builds flat array from a variadic set of arrays
- [buildEither(first:)](processconstraintbuilder/buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true
- [buildEither(second:)](processconstraintbuilder/buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false
- [buildExpression(\_:)](processconstraintbuilder/buildexpression%28__%29-6zrmh.md): Builds an expression within the builder
- [buildExpression(\_:)](processconstraintbuilder/buildexpression%28__%29-7rglu.md): Builds an expression within the builder
- [buildOptional(\_:)](processconstraintbuilder/buildoptional%28__%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true and has no else option.

## See Also

### Checking code requirements for running processes

- [SecTaskValidateForRequirement(task:requirement:)](sectaskvalidateforrequirement%28task_requirement_%29.md): Tests whether a task’s executable satisfies a lightweight code requirement.
- [ProcessCodeRequirement](processcoderequirement.md): A lightweight code requirement that you use to evaluate a running process.
- [allOf(requirement:)](allof%28requirement_%29-4k3ay.md): Creates a constraint that requires a running process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-vwhn.md): Creates a constraint that requires a running process’s executable to satisfy any of the provided constraints.
- [ProcessConstraint](processconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in process code requirements.
- [ProcessCodeSigningFlags](processcodesigningflags.md): A constraint that matches the current code-signing flags of a process.
- [TeamIdentifierMatchesCurrentProcess](teamidentifiermatchescurrentprocess.md): A constraint that matches if a process has the same team identifier as the calling process.
