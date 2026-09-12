> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametergroup/allparameters](https://developer.apple.com/documentation/audiotoolbox/auparametergroup/allparameters)

# allParameters (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a flat array of all parameters in the group, including those in child groups.

## Declaration

```swift
var allParameters: [AUParameter] { get }
```

## See Also

### Obtaining Group Parameters

- [children](children.md): The group’s child nodes.

# allParameters (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a flat array of all parameters in the group, including those in child groups.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AUParameter *> * allParameters;
```

```objectivec
@property (atomic, readonly) NSArray<AUParameter *> * allParameters;
```

## See Also

### Obtaining Group Parameters

- [children](children.md): The group’s child nodes.
