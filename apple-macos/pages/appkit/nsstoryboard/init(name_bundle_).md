> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard/init(name:bundle:)](https://developer.apple.com/documentation/appkit/nsstoryboard/init(name:bundle:))

# init(name:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a storyboard based on the named storyboard file in the specified bundle.

## Declaration

```swift
convenience init(name: NSStoryboard.Name, bundle storyboardBundleOrNil: Bundle?)
```

## Parameters

- `name`: The name of the storyboard file, without the filename extension. This method raises an exception if this parameter’s value is `nil`.
- `storyboardBundleOrNil`: The bundle used to resolve references to resources, typically images, in the archived controllers represented in the storyboard file. If you specify `nil`, AppKit uses the app’s main bundle.

<a id="return-value"></a>

## Return Value

A new storyboard object.

## See Also

### Creating a Storyboard Object

- [main](main.md): The app’s main storyboard.
- [NSStoryboard.Name](name.md): The name of the storyboard file.

# storyboardWithName:bundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Creates a storyboard based on the named storyboard file in the specified bundle.

## Declaration

```objectivec
+ (instancetype) storyboardWithName:(NSStoryboardName) name bundle:(NSBundle *) storyboardBundleOrNil;
```

## Parameters

- `name`: The name of the storyboard file, without the filename extension. This method raises an exception if this parameter’s value is `nil`.
- `storyboardBundleOrNil`: The bundle used to resolve references to resources, typically images, in the archived controllers represented in the storyboard file. If you specify `nil`, AppKit uses the app’s main bundle.

<a id="return-value"></a>

## Return Value

A new storyboard object.

## See Also

### Creating a Storyboard Object

- [mainStoryboard](main.md): The app’s main storyboard.
- [NSStoryboardName](name.md): The name of the storyboard file.
