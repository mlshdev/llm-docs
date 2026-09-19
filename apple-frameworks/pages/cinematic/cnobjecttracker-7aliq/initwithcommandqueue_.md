> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnobjecttracker-7aliq/initwithcommandqueue:

# initWithCommandQueue:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a new detection track builder.

## Declaration

```objectivec
- (instancetype) initWithCommandQueue:(id<MTLCommandQueue>) commandQueue;
```

## Parameters

- `commandQueue`: The command queue of a metal device in order to perform work.

<a id="return-value"></a>

## Return Value

An object representing a new detection track builder.
