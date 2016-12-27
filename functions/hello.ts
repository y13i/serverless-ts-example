export function hello(event, context, callback): void {
  const response = {
    statusCode: 200,

    headers: {
    },

    body: JSON.stringify({
      "message": "Hello TypeScript!!!!"
    })
  };

  callback(null, response);
};
