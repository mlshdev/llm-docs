> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osorderedset/getlastobject

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
