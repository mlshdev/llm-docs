> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/addoutputport(withtype:forkey:withattributes:)](https://developer.apple.com/documentation/quartz/qcplugin/addoutputport(withtype:forkey:withattributes:))

# addOutputPort(withType:forKey:withAttributes:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Adds an output port of the specified type and associates a key and attributes with the port.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func addOutputPort(withType type: String!, forKey key: String!, withAttributes attributes: [AnyHashable : Any]! = [:])
```

## Parameters

- `type`: The port type. See [Port Input and Output Types](../port-input-and-output-types.md).
- `key`: The key to associate  with the port.
- `attributes`: A dictionary of attributes for the port. See [Input and Output Port Attributes](../input-and-output-port-attributes.md). Although the dictionary is optional, it’s recommended that provide attributes to enhance the experience of those who use your custom patch. The attributes appear in a help tag when the user hovers a pointer over the property port on your custom patch. (See [attributesForPropertyPort(withKey:)](attributesforpropertyport%28withkey_%29.md).) Pass  `nil` if you do not want to provide attributes.

<a id="Discussion"></a>

## Discussion

This method throws an exception if called from within the [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method or if there is already an output port with that key.

## See Also

### Adding Ports Dynamically

- [addInputPort(withType:forKey:withAttributes:)](addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [removeInputPort(forKey:)](removeinputport%28forkey_%29.md): Deprecated. Removes the input port for a given key.
- [removeOutputPort(forKey:)](removeoutputport%28forkey_%29.md): Deprecated. Removes the output port for a given key.

# addOutputPortWithType:forKey:withAttributes: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Adds an output port of the specified type and associates a key and attributes with the port.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) addOutputPortWithType:(NSString *) type forKey:(NSString *) key withAttributes:(NSDictionary *) attributes;
```

## Parameters

- `type`: The port type. See [Port Input and Output Types](../port-input-and-output-types.md).
- `key`: The key to associate  with the port.
- `attributes`: A dictionary of attributes for the port. See [Input and Output Port Attributes](../input-and-output-port-attributes.md). Although the dictionary is optional, it’s recommended that provide attributes to enhance the experience of those who use your custom patch. The attributes appear in a help tag when the user hovers a pointer over the property port on your custom patch. (See [attributesForPropertyPortWithKey:](attributesforpropertyport%28withkey_%29.md).) Pass  `nil` if you do not want to provide attributes.

<a id="Discussion"></a>

## Discussion

This method throws an exception if called from within the [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method or if there is already an output port with that key.

## See Also

### Adding Ports Dynamically

- [addInputPortWithType:forKey:withAttributes:](addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [removeInputPortForKey:](removeinputport%28forkey_%29.md): Deprecated. Removes the input port for a given key.
- [removeOutputPortForKey:](removeoutputport%28forkey_%29.md): Deprecated. Removes the output port for a given key.
