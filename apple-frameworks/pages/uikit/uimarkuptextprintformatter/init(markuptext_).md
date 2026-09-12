> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimarkuptextprintformatter/init(markuptext:)](https://developer.apple.com/documentation/uikit/uimarkuptextprintformatter/init(markuptext:))

# init(markupText:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a markup-text print formatter initialized with an HTML string.

## Declaration

```swift
init(markupText: String)
```

## Parameters

- `markupText`: A string of HTML markup text or `nil` if you want to add the markup text later.

<a id="return-value"></a>

## Return Value

An instance of `UIMarkupTextPrintFormatter` or `nil` if the object could not be created.

## See Also

### Related Documentation

- [markupText](markuptext.md): The HTML markup text for the print formatter.

# initWithMarkupText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a markup-text print formatter initialized with an HTML string.

## Declaration

```objectivec
- (instancetype) initWithMarkupText:(NSString *) markupText;
```

## Parameters

- `markupText`: A string of HTML markup text or `nil` if you want to add the markup text later.

<a id="return-value"></a>

## Return Value

An instance of `UIMarkupTextPrintFormatter` or `nil` if the object could not be created.

## See Also

### Related Documentation

- [markupText](markuptext.md): The HTML markup text for the print formatter.
