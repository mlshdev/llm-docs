> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/dspdoublecomplex](https://developer.apple.com/documentation/kernel/dspdoublecomplex)

# DSPDoubleComplex

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

Used to hold a double-precision complex value.

## Declaration

```objectivec
typedef struct DSPDoubleComplex DSPDoubleComplex;
```

<a id="discussion"></a>

## Discussion

Double complex data are stored as ordered pairs of double-precision floating-point numbers. Because they are stored as ordered pairs, complex vectors require address strides that are multiples of two.

## Topics

### Fields

- [real](dspdoublecomplex/1579982-real.md): The real part of the value.
- [imag](https://developer.apple.com/documentation/accelerate/dspdoublecomplex/imag): The imaginary part of the value.

### Instance Properties

- [imag](dspdoublecomplex/1579996-imag.md)
