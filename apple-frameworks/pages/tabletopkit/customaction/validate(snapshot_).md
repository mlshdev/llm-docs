> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/customaction/validate(snapshot:)](https://developer.apple.com/documentation/tabletopkit/customaction/validate(snapshot:))

# validate(snapshot:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Implement this function to detect whether the action is valid and should be applied given the state of the table represented by `snapshot`. If not implemented, the action is always considered valid. It is important that the validation for a given action is only a function of the given snapshot and the data of the action instance.

## Declaration

```swift
func validate(snapshot: TableSnapshot) -> Bool
```

## Parameters

- `snapshot`: The state of the table to be used for this validation.

## Default Implementations

### CustomAction Implementations

- [validate(snapshot:)](validate%28snapshot_%29-1hmak.md): The default implementation of `validate` that always returns `true`.
