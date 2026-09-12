> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/hasconfiguresheet](https://developer.apple.com/documentation/screensaver/screensaverview/hasconfiguresheet)

# hasConfigureSheet (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the screen saver has an associated configuration sheet.

## Declaration

```swift
var hasConfigureSheet: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If you provide a configuration sheet in your bundle, override this method and return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the configuration sheet

- [configureSheet](configuresheet.md): The window that contains the controls to configure the screen saver.

# hasConfigureSheet (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the screen saver has an associated configuration sheet.

## Declaration

```objectivec
@property (readonly) BOOL hasConfigureSheet;
```

<a id="Discussion"></a>

## Discussion

If you provide a configuration sheet in your bundle, override this method and return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the configuration sheet

- [configureSheet](configuresheet.md): The window that contains the controls to configure the screen saver.
