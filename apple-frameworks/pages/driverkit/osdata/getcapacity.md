> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdata/getcapacity

# getCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns length of preallocated capacity.

## Declaration

```objectivec
size_t getCapacity() const;
```

<a id="return-value"></a>

## Return Value

Length of preallocated capacity.

## See Also

### Inspecting a Data Object

- [getLength](getlength.md): Returns length of data present.
- [OSDataGetLength](../osdatagetlength.md)
