> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextlist/startingitemnumber

# startingItemNumber (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

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
