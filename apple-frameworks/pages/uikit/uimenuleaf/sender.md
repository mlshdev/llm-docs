> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuleaf/sender](https://developer.apple.com/documentation/uikit/uimenuleaf/sender)

# sender (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The object on behalf of which to perform the menu element’s primary action.

## Declaration

```swift
var sender: Any? { get }
```

<a id="Discussion"></a>

## Discussion

The system populates this property during the execution of the menu element’s action (its handler or selector).

## See Also

### Performing actions

- [performWithSender(\_:target:)](performwithsender%28__target_%29.md): Performs the element’s primary action.

# sender (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The object on behalf of which to perform the menu element’s primary action.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id sender;
```

<a id="Discussion"></a>

## Discussion

The system populates this property during the execution of the menu element’s action (its handler or selector).

## See Also

### Performing actions

- [performWithSender:target:](performwithsender%28__target_%29.md): Performs the element’s primary action.
