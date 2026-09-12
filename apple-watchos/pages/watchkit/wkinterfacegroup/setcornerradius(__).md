> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacegroup/setcornerradius(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacegroup/setcornerradius(_:))

# setCornerRadius(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the radius to use when drawing rounded corners for the group.

## Declaration

```swift
func setCornerRadius(_ cornerRadius: CGFloat)
```

## Parameters

- `cornerRadius`: The radius (in points) of the circle used to round the corners of the groups edges.

<a id="Discussion"></a>

## Discussion

Setting the radius to a value greater than `0.0` causes the group to draw rounded corners on its background. When a corner radius is applied, the group’s background color or image are clipped accordingly.

The default corner radius for groups is 6 points.

## See Also

### Setting the Layout Information

- [setContentInset(\_:)](setcontentinset%28__%29.md): Sets the distance between the edges of the group and any contained objects.

# setCornerRadius: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the radius to use when drawing rounded corners for the group.

## Declaration

```objectivec
- (void) setCornerRadius:(CGFloat) cornerRadius;
```

## Parameters

- `cornerRadius`: The radius (in points) of the circle used to round the corners of the groups edges.

<a id="Discussion"></a>

## Discussion

Setting the radius to a value greater than `0.0` causes the group to draw rounded corners on its background. When a corner radius is applied, the group’s background color or image are clipped accordingly.

The default corner radius for groups is 6 points.

## See Also

### Setting the Layout Information

- [setContentInset:](setcontentinset%28__%29.md): Sets the distance between the edges of the group and any contained objects.
