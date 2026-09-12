> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/1627411-clearinterval](https://developer.apple.com/documentation/tvmljs/1627411-clearinterval)

# clearInterval

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 9.0+

Stops the function associated with the identifier from repeating.

## Declaration

```
void clearInterval(
    in String intervalID
);
```

## Parameters

- `intervalID`: A string identifying the interval to clear.

<a id="discussion"></a>

## Discussion

This function stops the function associated with the identifier created by the [setInterval](1627337-setinterval.md) function from executing.

## See Also

### Automating Function Timing

- [setInterval](1627337-setinterval.md): Repeatedly executes a given function at the given time interval.
- [setTimeout](1627349-settimeout.md): Executes a given function after a set amount of time.
- [clearTimeout](1627416-cleartimeout.md): Stops the function associated with the identifier from executing.
