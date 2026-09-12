> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_complex_double/status](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_complex_double/status)

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
