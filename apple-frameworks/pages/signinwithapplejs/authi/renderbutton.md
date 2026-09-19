> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/signinwithapplejs/authi/renderbutton

# renderButton

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Method  
**Availability:** Sign in with Apple JS 1.1.2+

Renders the button contained in the wrapper tag.

## Declaration

```
void renderButton();
```

<a id="Discussion"></a>

## Discussion

Use this function when the framework you’re using requires rerender support. Calling this function forces the render of the button found in the wrapper tag.
