> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitycontent(for:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitycontent(for:))

# accessibilityContent(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the accessibility content for a text range.

## Declaration

```swift
func accessibilityContent(for range: BEAccessibilityTextMarker.Range) -> String?
```

## Parameters

- `range`: The text marker range.

<a id="return-value"></a>

## Return Value

The string of text within the marker range, or `nil` if there’s no text in the range.

# accessibilityContentForTextMarkerRange: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the accessibility content for a text range.

## Declaration

```objectivec
- (NSString *) accessibilityContentForTextMarkerRange:(BEAccessibilityTextMarkerRange *) range;
```

## Parameters

- `range`: The text marker range.

<a id="return-value"></a>

## Return Value

The string of text within the marker range, or `nil` if there’s no text in the range.
