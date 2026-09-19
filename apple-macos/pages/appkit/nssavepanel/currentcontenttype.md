> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssavepanel/currentcontenttype

# currentContentType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

`NSSavePanel`:The current type. If set to `nil`, resets to the first allowed content type. Returns `nil` if `allowedContentTypes` is empty. `NSOpenPanel`: Not used.

## Declaration

```swift
var currentContentType: UTType? { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Asserts that `currentContentType` conforms to `UTTypeData` or `UTTypeDirectory`.

# currentContentType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

`NSSavePanel`:The current type. If set to `nil`, resets to the first allowed content type. Returns `nil` if `allowedContentTypes` is empty. `NSOpenPanel`: Not used.

## Declaration

```objectivec
@property (copy, nullable) UTType * currentContentType;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Asserts that `currentContentType` conforms to `UTTypeData` or `UTTypeDirectory`.
