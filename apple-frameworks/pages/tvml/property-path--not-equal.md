> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/property-path--not-equal](https://developer.apple.com/documentation/tvml/property-path--not-equal)

# {property-path}-not-equal

**Kind:** Article

Compares a value from a JSON file to a specified value to find out if they are not equal.

<a id="Overview"></a>

## Overview

The `{property-path}-not-equal` query is used with data binding to determine whether one value is not equal to another. Bind a value from your JSON file to a variable associated with the query. If the `property-path` is not equal to the designated value, the element is processed.

For example, you want to change the title of a movie if the user has watched it previously. Add a `specialize` element that contains a `{property-path}-not-equal` query. If the `timesPlayed` variable is not equal to 0, color the title green.

```xml
<specialize state="({timesPlayed}-not-equal:0)">
    <title tag="title" style="color:green"/>
</specialize>
```
