> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1508442-wsgetwstypeidfromcftype](https://developer.apple.com/documentation/coreservices/1508442-wsgetwstypeidfromcftype)

# WSGetWSTypeIDFromCFType

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Returns the `WSTypeID` associated with a given `CFTypeRef`.

## Declaration

```objectivec
WSTypeID WSGetWSTypeIDFromCFType(CFTypeRef ref);
```

## Parameters

- `ref`: A `CFTypeRef` object. An actual instance of a CFType must be passed.

<a id="return_value"></a>

## Return Value

the `WSTypeID` used in serializing the object.  If no `WSTypeID` matches, `eWSUnknownType` is returned.

<a id="discussion"></a>

## Discussion

Returns the `WSTypeID` associated with `CFTypeRef`.  Because there is not a one to one mapping between `CFTypeID` and `WSTypesID` an actual instance of a CFType must be passed.
