> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_complex_float/status

# status (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Status field for a factorization.

## Declaration

```swift
var status: SparseStatus_t
```

<a id="discussion"></a>

## Discussion

```
                                  numerical issue.
```

```
                                  singular.
```

```
                                  error (e.g. failed to allocate memory).
```

# status (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Status field for a factorization.

## Declaration

```objectivec
SparseStatus_t status;
```

<a id="discussion"></a>

## Discussion

```
                                  numerical issue.
```

```
                                  singular.
```

```
                                  error (e.g. failed to allocate memory).
```
