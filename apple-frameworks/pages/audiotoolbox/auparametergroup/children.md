> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametergroup/children](https://developer.apple.com/documentation/audiotoolbox/auparametergroup/children)

# children (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The group’s child nodes.

## Declaration

```swift
var children: [AUParameterNode] { get }
```

## See Also

### Obtaining Group Parameters

- [allParameters](allparameters.md): Returns a flat array of all parameters in the group, including those in child groups.

# children (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The group’s child nodes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AUParameterNode *> * children;
```

```objectivec
@property (atomic, readonly) NSArray<AUParameterNode *> * children;
```

## See Also

### Obtaining Group Parameters

- [allParameters](allparameters.md): Returns a flat array of all parameters in the group, including those in child groups.
