> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlist/startingitemnumber

# startingItemNumber (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the starting item number for the text list.

## Declaration

```swift
var startingItemNumber: Int { get set }
```

## Parameters

- `itemNum`: The item number.

<a id="Discussion"></a>

## Discussion

The default value is `1`. This value will be used only for ordered lists, and ignored in other cases.

# startingItemNumber (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the starting item number for the text list.

## Declaration

```objectivec
@property NSInteger startingItemNumber;
```

## Parameters

- `itemNum`: The item number.

<a id="Discussion"></a>

## Discussion

The default value is `1`. This value will be used only for ordered lists, and ignored in other cases.
