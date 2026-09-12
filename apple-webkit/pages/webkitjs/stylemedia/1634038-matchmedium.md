> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/stylemedia/1634038-matchmedium](https://developer.apple.com/documentation/webkitjs/stylemedia/1634038-matchmedium)

# matchMedium

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 5.0+ · Safari Mobile 4.2+

Evaluates the given string as a media query and returns the result.

## Declaration

```
boolean matchMedium(
    optional DOMString mediaquery
);
```

## Parameters

- `mediaquery`: The media query to evaluate.

<a id="return_value"></a>

## Return Value

`true` if the media query is logically true; otherwise, `false`.

<a id="discussion"></a>

## Discussion

For example, `window.styleMedia.matchMedium("(color)")` returns `true` if the display device is a color device. You can also use this method to check whether the browser supports 3D transforms as follows:

<a id="2557277"></a>

**Listing 1**

```javascript
if ('styleMedia' in window && window.styleMedia.matchMedium("(-webkit-transform-3d)")) {
  // Insert 3D code here
}
```

Or check to see whether the browser supports animations as follows:

<a id="2557280"></a>

**Listing 2**

```javascript
if ('styleMedia' in window && window.styleMedia.matchMedium("(-webkit-animation)")) {
  // Insert animation code here
}
```
