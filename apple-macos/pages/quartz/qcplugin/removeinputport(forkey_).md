> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/removeinputport(forkey:)](https://developer.apple.com/documentation/quartz/qcplugin/removeinputport(forkey:))

# removeInputPort(forKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Removes the input port for a given key.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func removeInputPort(forKey key: String!)
```

## Parameters

- `key`: The key associated with the port that you want to remove.

<a id="Discussion"></a>

## Discussion

This method throws an exception if from within  the [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method, if there is not an input port with that key, or if the port is created from a property.

## See Also

### Adding Ports Dynamically

- [addInputPort(withType:forKey:withAttributes:)](addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [addOutputPort(withType:forKey:withAttributes:)](addoutputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an output port of the specified type and associates a key and attributes with the port.
- [removeOutputPort(forKey:)](removeoutputport%28forkey_%29.md): Deprecated. Removes the output port for a given key.

# removeInputPortForKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Removes the input port for a given key.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) removeInputPortForKey:(NSString *) key;
```

## Parameters

- `key`: The key associated with the port that you want to remove.

<a id="Discussion"></a>

## Discussion

This method throws an exception if from within  the [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method, if there is not an input port with that key, or if the port is created from a property.

## See Also

### Adding Ports Dynamically

- [addInputPortWithType:forKey:withAttributes:](addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [addOutputPortWithType:forKey:withAttributes:](addoutputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an output port of the specified type and associates a key and attributes with the port.
- [removeOutputPortForKey:](removeoutputport%28forkey_%29.md): Deprecated. Removes the output port for a given key.
