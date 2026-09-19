> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcbuttonelementname-swift.struct/arcadebutton(row:column:)

# arcadeButton(row:column:)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

Returns the name of the arcade stick button at the specified location.

## Declaration

```swift
static func arcadeButton(row: Int, column: Int) -> GCButtonElementName
```

## Parameters

- `row`: The row on the arcade stick that the button appears in, where `0` is the bottom row.
- `column`: The column on the arcade stick that the button appears in, where `0` is the column nearest to the lever or direction buttons.

<a id="return-value"></a>

## Return Value

The name of an arcade stick button.
