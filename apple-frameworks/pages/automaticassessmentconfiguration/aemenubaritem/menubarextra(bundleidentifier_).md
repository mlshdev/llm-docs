> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aemenubaritem/menubarextra(bundleidentifier:)

# menuBarExtra(bundleIdentifier:)

**Framework:** Automatic Assessment Configuration  
**Kind:** Type Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Creates a menu bar extra item representing a custom menu extra.

## Declaration

```swift
static func menuBarExtra(bundleIdentifier: String) -> AEMenuBarItem
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the menu bar extra

<a id="return-value"></a>

## Return Value

A new menu bar item instance
