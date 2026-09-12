> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundviewcontroller/init(coder:)](https://developer.apple.com/documentation/mapkit/mklookaroundviewcontroller/init(coder:))

# init(coder:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new LookAround view controller object from a coder object provided by a storyboard or nib file.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The [NSCoder](../../foundation/nscoder.md) object

## See Also

### Creating a LookAround controller

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a new LookAround view controller from the specified nib and bundle.
- [init(scene:)](init%28scene_%29.md): Creates a new LookAround view controller with the specified scene.

# initWithCoder: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new LookAround view controller object from a coder object provided by a storyboard or nib file.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The [NSCoder](../../foundation/nscoder.md) object

## See Also

### Creating a LookAround controller

- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a new LookAround view controller from the specified nib and bundle.
- [initWithScene:](init%28scene_%29.md): Creates a new LookAround view controller with the specified scene.
