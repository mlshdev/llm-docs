> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsscreenshots](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsscreenshots)

# allowsScreenshots (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow screenshots copied to the clipboard during an assessment.

## Declaration

```swift
var allowsScreenshots: Bool { get set }
```

<a id="discussion"></a>

## Discussion

An assessment session disables the ability to take screenshots by default to maintain assessment integrity. This property specifically applies to screenshots that are copied to the clipboard, typically those taken using the Command+Control+Shift+3 and Command+Control+Shift+4 keyboard shortcuts. You can allow clipboard screenshots by setting `allowsScreenshots` to `true`.

> **Note**

> The clipboard is cleared before the assessment session ends to prevent exporting captured content.

# allowsScreenshots (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow screenshots copied to the clipboard during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsScreenshots;
```

<a id="discussion"></a>

## Discussion

An assessment session disables the ability to take screenshots by default to maintain assessment integrity. This property specifically applies to screenshots that are copied to the clipboard, typically those taken using the Command+Control+Shift+3 and Command+Control+Shift+4 keyboard shortcuts. You can allow clipboard screenshots by setting `allowsScreenshots` to `true`.

> **Note**

> The clipboard is cleared before the assessment session ends to prevent exporting captured content.
