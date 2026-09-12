> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/attributesforpropertyport(withkey:)](https://developer.apple.com/documentation/quartz/qcplugin/attributesforpropertyport(withkey:))

# attributesForPropertyPort(withKey:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a dictionary that contains strings for the user interface that describe the optional attributes for ports created from properties.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func attributesForPropertyPort(withKey key: String!) -> [AnyHashable : Any]!
```

## Parameters

- `key`: The name of the property.

<a id="return-value"></a>

## Return Value

A dictionary that contains key-value pairs for the port’s attributes. The keys must be one or more of the constants defined in [Input and Output Port Attributes](../input-and-output-port-attributes.md).

<a id="Discussion"></a>

## Discussion

It’s recommended that you implement this method to enhance the experience of those who use your custom patch. The attributes appear in a help tag when the user hovers a pointer over the property port on your custom patch. At a minimum, you should provide a user-readable name for the port. It might also be helpful to provide default, minimum, and maximum values for the port.

## See Also

### Defining Patch and Property Port Attributes

- [attributes()](attributes%28%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the custom patch.

# attributesForPropertyPortWithKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a dictionary that contains strings for the user interface that describe the optional attributes for ports created from properties.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (NSDictionary *) attributesForPropertyPortWithKey:(NSString *) key;
```

## Parameters

- `key`: The name of the property.

<a id="return-value"></a>

## Return Value

A dictionary that contains key-value pairs for the port’s attributes. The keys must be one or more of the constants defined in [Input and Output Port Attributes](../input-and-output-port-attributes.md).

<a id="Discussion"></a>

## Discussion

It’s recommended that you implement this method to enhance the experience of those who use your custom patch. The attributes appear in a help tag when the user hovers a pointer over the property port on your custom patch. At a minimum, you should provide a user-readable name for the port. It might also be helpful to provide default, minimum, and maximum values for the port.

## See Also

### Defining Patch and Property Port Attributes

- [attributes](attributes%28%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the custom patch.
