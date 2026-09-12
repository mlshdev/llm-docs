> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/init(title:)](https://developer.apple.com/documentation/uikit/uinavigationitem/init(title:))

# init(title:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a navigation item with the specified title.

## Declaration

```swift
init(title: String)
```

## Parameters

- `title`: The string to set as the navigation item’s title displayed in the center of the navigation bar.

<a id="return-value"></a>

## Return Value

A new [UINavigationItem](../uinavigationitem.md) object initialized with the specified title.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for this class.

## See Also

### Related Documentation

- [title](title.md): The navigation item’s title that displays in the navigation bar.

### Initializing an item

- [init(coder:)](init%28coder_%29.md): Creates a navigation item from data in an unarchiver.

# initWithTitle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a navigation item with the specified title.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title;
```

## Parameters

- `title`: The string to set as the navigation item’s title displayed in the center of the navigation bar.

<a id="return-value"></a>

## Return Value

A new [UINavigationItem](../uinavigationitem.md) object initialized with the specified title.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for this class.

## See Also

### Related Documentation

- [title](title.md): The navigation item’s title that displays in the navigation bar.

### Initializing an item

- [initWithCoder:](init%28coder_%29.md): Creates a navigation item from data in an unarchiver.
