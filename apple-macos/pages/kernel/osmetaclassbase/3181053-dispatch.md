> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osmetaclassbase/3181053-dispatch

# Dispatch

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 15.4+

Runtime internals

## Declaration

```objectivec
virtual kern_return_t Dispatch(IORPC invoke);
```

```objectivec
virtual kern_return_t Dispatch(const IORPC rpc);
```

## See Also

### Managing Runtime Internals

- [Invoke](3181056-invoke.md): Runtime internals
