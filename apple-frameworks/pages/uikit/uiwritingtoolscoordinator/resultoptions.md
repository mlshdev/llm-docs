> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/resultoptions](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/resultoptions)

# resultOptions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The type of content the system generates for your custom text view.

## Declaration

```swift
var resultOptions: UIWritingToolsResultOptions { get }
```

<a id="discussion"></a>

## Discussion

This property contains the set of options that Writing Tools outputs for your view. Writing Tools takes the value in the [preferredResultOptions](preferredresultoptions.md) property into consideration when determining this value.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.

# resultOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The type of content the system generates for your custom text view.

## Declaration

```objectivec
@property (nonatomic, readonly) UIWritingToolsResultOptions resultOptions;
```

<a id="discussion"></a>

## Discussion

This property contains the set of options that Writing Tools outputs for your view. Writing Tools takes the value in the [preferredResultOptions](preferredresultoptions.md) property into consideration when determining this value.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
