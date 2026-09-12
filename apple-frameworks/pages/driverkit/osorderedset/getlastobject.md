> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osorderedset/getlastobject](https://developer.apple.com/documentation/driverkit/osorderedset/getlastobject)

# getLastObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

The last object in the ordered set if there is one, otherwise `NULL`.

## Declaration

```objectivec
OSObject * getLastObject() const;
```

<a id="discussion"></a>

## Discussion

The returned object will be released if removed from the ordered set; if you plan to store the reference, you should call retain on that object.
