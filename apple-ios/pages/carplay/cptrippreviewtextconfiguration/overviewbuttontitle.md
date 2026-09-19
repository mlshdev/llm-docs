> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrippreviewtextconfiguration/overviewbuttontitle

# overviewButtonTitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The title displayed on the overview button.

## Declaration

```swift
var overviewButtonTitle: String? { get }
```

<a id="Discussion"></a>

## Discussion

When the title is `nil`, the button displays a system-provided title.

## See Also

### Setting Button Titles

- [startButtonTitle](startbuttontitle.md): The title displayed on the start button.
- [additionalRoutesButtonTitle](additionalroutesbuttontitle.md): The title displayed on the routes button.

# overviewButtonTitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The title displayed on the overview button.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * overviewButtonTitle;
```

<a id="Discussion"></a>

## Discussion

When the title is `nil`, the button displays a system-provided title.

## See Also

### Setting Button Titles

- [startButtonTitle](startbuttontitle.md): The title displayed on the start button.
- [additionalRoutesButtonTitle](additionalroutesbuttontitle.md): The title displayed on the routes button.
