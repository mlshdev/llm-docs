> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/dspcomplex](https://developer.apple.com/documentation/kernel/dspcomplex)

# DSPComplex

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

Used to hold a complex value.

## Declaration

```objectivec
typedef struct DSPComplex DSPComplex;
```

<a id="discussion"></a>

## Discussion

Complex data are stored as ordered pairs of floating-point numbers. Because they are stored as ordered pairs, complex vectors require address strides that are multiples of two.

## Topics

### Fields

- [real](dspcomplex/1579938-real.md): The real part of the value.
- [imag](https://developer.apple.com/documentation/accelerate/dspcomplex/imag): The imaginary part of the value.

### Instance Properties

- [imag](dspcomplex/1579947-imag.md)
