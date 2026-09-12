> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/removeoutputport(forkey:)](https://developer.apple.com/documentation/quartz/qcplugin/removeoutputport(forkey:))

# removeOutputPort(forKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Removes the output port for a given key.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func removeOutputPort(forKey key: String!)
```

## Parameters

- `key`: The key associated with the port that you want to remove.

<a id="Discussion"></a>

## Discussion

This method throws an exception if called from within the [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method, if there is not an output port with that key, or if the port is created from a property.

## See Also

### Adding Ports Dynamically

- [addInputPort(withType:forKey:withAttributes:)](addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [removeInputPort(forKey:)](removeinputport%28forkey_%29.md): Deprecated. Removes the input port for a given key.
- [addOutputPort(withType:forKey:withAttributes:)](addoutputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an output port of the specified type and associates a key and attributes with the port.

# removeOutputPortForKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Removes the output port for a given key.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) removeOutputPortForKey:(NSString *) key;
```

## Parameters

- `key`: The key associated with the port that you want to remove.

<a id="Discussion"></a>

## Discussion

This method throws an exception if called from within the [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method, if there is not an output port with that key, or if the port is created from a property.

## See Also

### Adding Ports Dynamically

- [addInputPortWithType:forKey:withAttributes:](addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [removeInputPortForKey:](removeinputport%28forkey_%29.md): Deprecated. Removes the input port for a given key.
- [addOutputPortWithType:forKey:withAttributes:](addoutputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an output port of the specified type and associates a key and attributes with the port.
