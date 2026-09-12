> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/menuzone()](https://developer.apple.com/documentation/appkit/nsmenu/menuzone())

# menuZone() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns the zone from which `NSMenu` objects should be allocated.

## Declaration

```swift
class func menuZone() -> NSZone!
```

<a id="return-value"></a>

## Return Value

The zone from which `NSMenu` objects should be allocated.

<a id="Discussion"></a>

## Discussion

This is left in for compatibility and always returns [NSDefaultMallocZone](https://developer.apple.com/documentation/foundation/nsdefaultmalloczone). It is not necessary to use this.

# menuZone (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns the zone from which `NSMenu` objects should be allocated.

## Declaration

```objectivec
+ (NSZone *) menuZone;
```

<a id="return-value"></a>

## Return Value

The zone from which `NSMenu` objects should be allocated.

<a id="Discussion"></a>

## Discussion

This is left in for compatibility and always returns [NSDefaultMallocZone](https://developer.apple.com/documentation/foundation/nsdefaultmalloczone). It is not necessary to use this.

## See Also

### Controlling Allocation Zones

- [setMenuZone:](setmenuzone_.md): Deprecated. Sets the zone from which `NSMenu` objects should be allocated
