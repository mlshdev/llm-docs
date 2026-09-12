> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemdecorating/decorations](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemdecorating/decorations)

# decorations (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the item for an array of decorations.

## Declaration

```swift
var decorations: [NSFileProviderItemDecorationIdentifier]? { get }
```

<a id="Discussion"></a>

## Discussion

The system calls this method to request the item’s decorations. Your implementation should return an array of [NSFileProviderItemDecorationIdentifier](../nsfileprovideritemdecorationidentifier.md) instances.

# decorations (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the item for an array of decorations.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSArray<NSString *> * decorations;
```

<a id="Discussion"></a>

## Discussion

The system calls this method to request the item’s decorations. Your implementation should return an array of [NSFileProviderItemDecorationIdentifier](../nsfileprovideritemdecorationidentifier.md) instances.
