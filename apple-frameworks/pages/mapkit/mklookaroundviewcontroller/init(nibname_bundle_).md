> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundviewcontroller/init(nibname:bundle:)](https://developer.apple.com/documentation/mapkit/mklookaroundviewcontroller/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new LookAround view controller from the specified nib and bundle.

## Declaration

```swift
init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?)
```

## Parameters

- `nibNameOrNil`: The name of the nib file.
- `nibBundleOrNil`: The [Bundle](../../foundation/bundle.md) file.

## See Also

### Creating a LookAround controller

- [init(coder:)](init%28coder_%29.md): Creates a new LookAround view controller object from a coder object provided by a storyboard or nib file.
- [init(scene:)](init%28scene_%29.md): Creates a new LookAround view controller with the specified scene.

# initWithNibName:bundle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new LookAround view controller from the specified nib and bundle.

## Declaration

```objectivec
- (instancetype) initWithNibName:(NSString *) nibNameOrNil bundle:(NSBundle *) nibBundleOrNil;
```

## Parameters

- `nibNameOrNil`: The name of the nib file.
- `nibBundleOrNil`: The [NSBundle](../../foundation/bundle.md) file.

## See Also

### Creating a LookAround controller

- [initWithCoder:](init%28coder_%29.md): Creates a new LookAround view controller object from a coder object provided by a storyboard or nib file.
- [initWithScene:](init%28scene_%29.md): Creates a new LookAround view controller with the specified scene.
