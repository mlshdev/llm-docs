> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/collection](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/collection)

# collection (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The enclosing element for this element.

## Declaration

```swift
weak var collection: GCControllerElement? { get }
```

<a id="Discussion"></a>

## Discussion

If this element is part of another element, this property is the containing element; otherwise, it’s `nil`.

# collection (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The enclosing element for this element.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) GCControllerElement * collection;
```

<a id="Discussion"></a>

## Discussion

If this element is part of another element, this property is the containing element; otherwise, it’s `nil`.
