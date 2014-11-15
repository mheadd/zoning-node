# A Node.js module for the zoning.io API (work in progress).

## Usage

* Clone this repo.
* Install dependencies by running <code>npm install</code>
* A few examples are in the samples directory. Try one by doing (you should see some JSON):

<pre>
	node samples/jurisdiction.js
</pre> 

```json
{
  "jurisdiction": {
    "url": "",
    "slug": "brownsburg",
    "center": [
      39.843072,
      -86.39715799999999
    ],
    "id": 78,
    "name": "Brownsburg",
    "full_name": "Brownsburg, IN",
    "state": "Indiana",
    "state_abbreviation": "IN",
    "subdomain": "brownsburg",
    "featured": true,
    "bounds": [
      [
        39.893072,
        -86.347158
      ],
      [
        39.793072,
        -86.447158
      ]
    ]
  }
}
```