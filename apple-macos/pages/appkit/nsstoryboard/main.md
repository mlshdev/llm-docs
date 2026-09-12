> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard/main](https://developer.apple.com/documentation/appkit/nsstoryboard/main)

# main (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The app’s main storyboard.

## Declaration

```swift
class var main: NSStoryboard? { get }
```

<a id="Discussion"></a>

## Discussion

The name of the main storyboard is stored in the [NSMainStoryboardFile](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmainstoryboardfile) key of the app’s `Info.plist` file.

## See Also

### Creating a Storyboard Object

- [init(name:bundle:)](init%28name_bundle_%29.md): Creates a storyboard based on the named storyboard file in the specified bundle.
- [NSStoryboard.Name](name.md): The name of the storyboard file.

# mainStoryboard (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The app’s main storyboard.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSStoryboard * mainStoryboard;
```

<a id="Discussion"></a>

## Discussion

The name of the main storyboard is stored in the [NSMainStoryboardFile](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmainstoryboardfile) key of the app’s `Info.plist` file.

## See Also

### Creating a Storyboard Object

- [storyboardWithName:bundle:](init%28name_bundle_%29.md): Creates a storyboard based on the named storyboard file in the specified bundle.
- [NSStoryboardName](name.md): The name of the storyboard file.
