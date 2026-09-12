> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/helpanchor](https://developer.apple.com/documentation/foundation/nserror/helpanchor)

# helpAnchor (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string to display in response to an alert panel help anchor button being pressed.

## Declaration

```swift
var helpAnchor: String? { get }
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSHelpAnchorErrorKey](../nshelpanchorerrorkey.md). If the user info dictionary doesn’t contain a value for [NSHelpAnchorErrorKey](../nshelpanchorerrorkey.md), this property is `nil`.

If this property is non-`nil` for an error being presented by [init(error:)](https://developer.apple.com/documentation/appkit/nsalert/init%28error:%29), the alert panel will include a help anchor button that can display this string.

# helpAnchor (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string to display in response to an alert panel help anchor button being pressed.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * helpAnchor;
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSHelpAnchorErrorKey](../nshelpanchorerrorkey.md). If the user info dictionary doesn’t contain a value for [NSHelpAnchorErrorKey](../nshelpanchorerrorkey.md), this property is `nil`.

If this property is non-`nil` for an error being presented by [alertWithError:](https://developer.apple.com/documentation/appkit/nsalert/init%28error:%29), the alert panel will include a help anchor button that can display this string.
