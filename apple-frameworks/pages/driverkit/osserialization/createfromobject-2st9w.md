> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osserialization/createfromobject-2st9w](https://developer.apple.com/documentation/driverkit/osserialization/createfromobject-2st9w)

# createFromObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static OSSerializationPtr createFromObject(OSObjectPtr const object);
```

<a id="discussion"></a>

## Discussion

Similar to the above variant, except assuming copyOutHandler to be NULL.
