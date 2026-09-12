> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/attributes()](https://developer.apple.com/documentation/quartz/qcplugin/attributes())

# attributes() (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a dictionary that contains strings for the user interface that describe the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func attributes() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

The dictionary can contain one or more of these keys along with the appropriate string: [QCPlugInAttributeNameKey](../qcpluginattributenamekey.md) and [QCPlugInAttributeDescriptionKey](../qcpluginattributedescriptionkey.md).

<a id="Discussion"></a>

## Discussion

It’s recommended that you implement this method to enhance the experience of those who use your custom patch. The attribute name string that you provide is displayed in the Quartz Composer editor window when the custom patch name is selected in the Patch Creator (see figure). The attribute description key is displayed in the Information pane of the inspector for the custom patch.

![The patch library with the description box open.](https://developer.apple.com/images/com.apple.quartz/media-2557124.jpg)

## See Also

### Defining Patch and Property Port Attributes

- [attributesForPropertyPort(withKey:)](attributesforpropertyport%28withkey_%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the optional attributes for ports created from properties.

# attributes (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a dictionary that contains strings for the user interface that describe the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (NSDictionary *) attributes;
```

<a id="return-value"></a>

## Return Value

The dictionary can contain one or more of these keys along with the appropriate string: [QCPlugInAttributeNameKey](../qcpluginattributenamekey.md) and [QCPlugInAttributeDescriptionKey](../qcpluginattributedescriptionkey.md).

<a id="Discussion"></a>

## Discussion

It’s recommended that you implement this method to enhance the experience of those who use your custom patch. The attribute name string that you provide is displayed in the Quartz Composer editor window when the custom patch name is selected in the Patch Creator (see figure). The attribute description key is displayed in the Information pane of the inspector for the custom patch.

![The patch library with the description box open.](https://developer.apple.com/images/com.apple.quartz/media-2557124.jpg)

## See Also

### Defining Patch and Property Port Attributes

- [attributesForPropertyPortWithKey:](attributesforpropertyport%28withkey_%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the optional attributes for ports created from properties.
