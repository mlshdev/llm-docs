> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/mainnibname](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/mainnibname)

# mainNibName (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The name of the preference pane’s nib file.

## Declaration

```swift
var mainNibName: String { get }
```

<a id="Discussion"></a>

## Discussion

The name should not include the `.nib` extension.

The default implementation returns the value of the `NSMainNibFile` key in the bundle’s information property list. If the key does not exist, it returns a default value of `@”Main”`.

## See Also

### Getting the Bundle Information

- [bundle](bundle.md): The preference pane’s bundle.
- [mainView](mainview.md): The main view of the preference pane.

# mainNibName (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The name of the preference pane’s nib file.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * mainNibName;
```

<a id="Discussion"></a>

## Discussion

The name should not include the `.nib` extension.

The default implementation returns the value of the `NSMainNibFile` key in the bundle’s information property list. If the key does not exist, it returns a default value of `@”Main”`.

## See Also

### Getting the Bundle Information

- [bundle](bundle.md): The preference pane’s bundle.
- [mainView](mainview.md): The main view of the preference pane.
