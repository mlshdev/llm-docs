> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/sectaskvalidateforrequirement(task:requirement:)](https://developer.apple.com/documentation/lightweightcoderequirements/sectaskvalidateforrequirement(task:requirement:))

# SecTaskValidateForRequirement(task:requirement:)

**Framework:** LightweightCodeRequirements  
**Kind:** Function  
**Availability:** Mac Catalyst 17.4+ · macOS 14.4+

Tests whether a task’s executable satisfies a lightweight code requirement.

## Declaration

```swift
func SecTaskValidateForRequirement(task: SecTask, requirement: ProcessCodeRequirement) throws -> Bool
```

## Parameters

- `task`: An object that represents the running task.
- `requirement`: The lightweight code requirement to test.

<a id="return-value"></a>

## Return Value

If the requirement matches the process, then `true`; `false` if it doesn’t.

<a id="discussion"></a>

## Discussion

This function throws a value from [ConstraintError](constrainterror.md) if it can’t evaluate whether the executable satisfies the lightweight code requirement.

## See Also

### Checking code requirements for running processes

- [ProcessCodeRequirement](processcoderequirement.md): A lightweight code requirement that you use to evaluate a running process.
- [allOf(requirement:)](allof%28requirement_%29-4k3ay.md): Creates a constraint that requires a running process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-vwhn.md): Creates a constraint that requires a running process’s executable to satisfy any of the provided constraints.
- [ProcessConstraint](processconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in process code requirements.
- [ProcessCodeSigningFlags](processcodesigningflags.md): A constraint that matches the current code-signing flags of a process.
- [ProcessConstraintBuilder](processconstraintbuilder.md): A custom parameter attribute that constructs process constraints from closures.
- [TeamIdentifierMatchesCurrentProcess](teamidentifiermatchescurrentprocess.md): A constraint that matches if a process has the same team identifier as the calling process.
