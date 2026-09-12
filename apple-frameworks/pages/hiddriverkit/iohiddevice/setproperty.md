> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohiddevice/setproperty](https://developer.apple.com/documentation/hiddriverkit/iohiddevice/setproperty)

# setProperty

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Updates the specified property on the corresponding kernel object.

## Declaration

```objectivec
virtual void setProperty(OSObject *key, OSObject *value);
```

## Parameters

- `key`: The property key.
- `value`: The property value.
