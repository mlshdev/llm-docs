> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osset/getanyobject

# getAnyObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns an arbitrary (not random) object from the set.

## Declaration

```objectivec
OSObject * getAnyObject() const;
```

<a id="return-value"></a>

## Return Value

An arbitrary (not random) object if one exists within the set.

<a id="discussion"></a>

## Discussion

The returned object will be released if removed from the set; if you plan to store the reference, you should call retain on that object.
