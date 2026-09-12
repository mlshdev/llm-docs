> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkreference/init(inktype:color:)](https://developer.apple.com/documentation/pencilkit/pkinkreference/init(inktype:color:))

# init(inkType:color:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Create a new ink, specifying its type, color.

## Declaration

```swift
init(inkType type: __PKInkType, color: UIColor)
```

```swift
init(inkType type: __PKInkType, color: NSColor)
```

## Parameters

- `type`: The type of ink to create, from one of the available [PKInkType](../pkinktype.md) enumerations.
- `color`: The base color for this ink.

# initWithInkType:color: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Create a new ink, specifying its type, color.

## Declaration

```objectivec
- (instancetype) initWithInkType:(PKInkType) type color:(UIColor *) color;
```

```objectivec
- (instancetype) initWithInkType:(PKInkType) type color:(NSColor *) color;
```

## Parameters

- `type`: The type of ink to create, from one of the available [PKInkType](../pkinktype.md) enumerations.
- `color`: The base color for this ink.
