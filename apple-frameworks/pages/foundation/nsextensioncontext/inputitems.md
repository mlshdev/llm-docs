> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/inputitems](https://developer.apple.com/documentation/foundation/nsextensioncontext/inputitems)

# inputItems (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of input [NSExtensionItem](../nsextensionitem.md) objects associated with the context.

## Declaration

```swift
var inputItems: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

If the context has no input items, this array is empty.

# inputItems (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of input [NSExtensionItem](../nsextensionitem.md) objects associated with the context.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * inputItems;
```

```objectivec
@property (atomic, copy, readonly) NSArray * inputItems;
```

<a id="Discussion"></a>

## Discussion

If the context has no input items, this array is empty.
