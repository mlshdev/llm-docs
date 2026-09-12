> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/launchconstraintbuilder](https://developer.apple.com/documentation/lightweightcoderequirements/launchconstraintbuilder)

# LaunchConstraintBuilder

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A custom parameter attribute that constructs launch constraints from closures.

## Declaration

```swift
@resultBuilder struct LaunchConstraintBuilder
```

## Topics

### Type Methods

- [buildBlock(\_:)](launchconstraintbuilder/buildblock%28__%29.md): Builds flat array from a variadic set of arrays
- [buildEither(first:)](launchconstraintbuilder/buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true
- [buildEither(second:)](launchconstraintbuilder/buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false
- [buildExpression(\_:)](launchconstraintbuilder/buildexpression%28__%29-5tl61.md): Builds an expression within the builder
- [buildExpression(\_:)](launchconstraintbuilder/buildexpression%28__%29-6l0k6.md): Builds an expression within the builder
- [buildOptional(\_:)](launchconstraintbuilder/buildoptional%28__%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true and has no else option

## See Also

### Checking code requirements for launching processes

- [SecCodeCheckValidityWithProcessRequirement(code:flags:requirement:)](seccodecheckvaliditywithprocessrequirement%28code_flags_requirement_%29.md): Checks whether the code associated with a running process satisfies a lightweight code requirement.
- [launchRequirement](../foundation/process/launchrequirement.md)
- [LaunchCodeRequirement](launchcoderequirement.md): A lightweight code requirement that you use to evaluate the executable for a launching process.
- [allOf(requirement:)](allof%28requirement_%29-4gf5f.md): Creates a constraint that requires a launching process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-6nicx.md): Creates a constraint that requires a launching process’s executable to satisfy any of the provided constraints.
- [LaunchConstraint](launchconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in launch code requirements.
