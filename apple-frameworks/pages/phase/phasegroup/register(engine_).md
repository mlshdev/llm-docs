> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegroup/register(engine:)](https://developer.apple.com/documentation/phase/phasegroup/register(engine:))

# register(engine:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds the group to the engine’s dictionary.

## Declaration

```swift
func register(engine: PHASEEngine)
```

## Parameters

- `engine`: The engine with which to register this group.

<a id="Discussion"></a>

## Discussion

The function generates an exception if the argument is `nil` or if engine already contains the group. For more information, see [groups](../phaseengine/groups.md).

## See Also

### Defining the Group

- [unregisterFromEngine()](unregisterfromengine%28%29.md): Removes the group from the engine’s dictionary.

# registerWithEngine: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds the group to the engine’s dictionary.

## Declaration

```objectivec
- (void) registerWithEngine:(PHASEEngine *) engine;
```

## Parameters

- `engine`: The engine with which to register this group.

<a id="Discussion"></a>

## Discussion

The function generates an exception if the argument is `nil` or if engine already contains the group. For more information, see [groups](../phaseengine/groups.md).

## See Also

### Defining the Group

- [unregisterFromEngine](unregisterfromengine%28%29.md): Removes the group from the engine’s dictionary.
