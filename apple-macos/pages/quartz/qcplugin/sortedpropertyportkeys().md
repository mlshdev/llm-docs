> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/sortedpropertyportkeys()](https://developer.apple.com/documentation/quartz/qcplugin/sortedpropertyportkeys())

# sortedPropertyPortKeys() (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns and array of property port keys in the order you want them to appear in the user interface.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func sortedPropertyPortKeys() -> [Any]!
```

<a id="return-value"></a>

## Return Value

The property port keys in the order you want them to appear in the user interface.

<a id="Discussion"></a>

## Discussion

Override this method to specify an optional ordering for property based ports in the user interface.

# sortedPropertyPortKeys (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns and array of property port keys in the order you want them to appear in the user interface.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (NSArray *) sortedPropertyPortKeys;
```

<a id="return-value"></a>

## Return Value

The property port keys in the order you want them to appear in the user interface.

<a id="Discussion"></a>

## Discussion

Override this method to specify an optional ordering for property based ports in the user interface.
