> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1508451-wsgetcftypeidfromwstypeid](https://developer.apple.com/documentation/coreservices/1508451-wsgetcftypeidfromwstypeid)

# WSGetCFTypeIDFromWSTypeID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Gets the CFType associated with a given WSType

## Declaration

```objectivec
CFTypeID WSGetCFTypeIDFromWSTypeID(WSTypeID typeID);
```

## Parameters

- `typeID`: The `WSTypeID` for which you need a `CFTypeID`.

<a id="return_value"></a>

## Return Value

Returns a `CFTypeID`, or 0 if not found

<a id="discussion"></a>

## Discussion

Returns the `CFTypeID` that is associated with a given `WSTypeID`.  `CFTypeIDs` are only valid during a particular instance of a process and should not be used as static values.
