> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextension/tabconfiguration/shouldaddtoselection

# shouldAddToSelection (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates whether the tab should be added to the current tab selection.

## Declaration

```swift
var shouldAddToSelection: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the tab should be part of the current selection, but not necessarily become the active tab unless [shouldBeActive](shouldbeactive.md) is also `YES`. If this property is `NO`, the tab shouldn’t be part of the current selection.

# shouldAddToSelection (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates whether the tab should be added to the current tab selection.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldAddToSelection;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the tab should be part of the current selection, but not necessarily become the active tab unless [shouldBeActive](shouldbeactive.md) is also `YES`. If this property is `NO`, the tab shouldn’t be part of the current selection.
